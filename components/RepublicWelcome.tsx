'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import './republic-welcome.css';

// Türkiye saati UTC+3 (DST yok). Bitiş anı hariçtir.
const CAMPAIGN_DATE = '2026-10-29';
const CAMPAIGN_START = Date.parse('2026-10-28T00:00:00+03:00');
const CAMPAIGN_END = Date.parse('2026-10-30T00:00:00+03:00');
const DISPLAY_SECONDS = 10;
const CLOSE_ANIMATION_MS = 500;
const CHECK_INTERVAL_MS = 15_000;

function campaignIsActive() {
  const now = Date.now();
  return now >= CAMPAIGN_START && now < CAMPAIGN_END;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function RepublicWelcome() {
  const [flagVisible, setFlagVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [remaining, setRemaining] = useState(DISPLAY_SECONDS);

  const skipRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const closeAnimationRef = useRef(0);
  const openRef = useRef(false);
  const bypassRef = useRef(false);
  const initializedRef = useRef(false);

  const storageKey = useRef('');

  const finishClose = useCallback(() => {
    window.clearTimeout(closeAnimationRef.current);
    openRef.current = false;
    setOpen(false);
    setClosing(false);
  }, []);

  const requestClose = useCallback(
    (immediate = false) => {
      if (!openRef.current) return;
      window.clearTimeout(closeAnimationRef.current);
      if (immediate || prefersReducedMotion()) {
        finishClose();
        return;
      }
      setClosing(true);
      closeAnimationRef.current = window.setTimeout(finishClose, CLOSE_ANIMATION_MS);
    },
    [finishClose]
  );

  const openWelcome = useCallback(() => {
    if (openRef.current) return;
    openRef.current = true;
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setRemaining(DISPLAY_SECONDS);
    setClosing(false);
    setOpen(true);
  }, []);

  // İlk kurulum: tarih/parametre/localStorage kararları yalnızca tarayıcıda.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const bypass = params.get('preview') === '1' || params.get('test') === '1';
    const writesStorage = params.get('preview') !== '1' && params.get('test') !== '1';
    bypassRef.current = bypass;
    storageKey.current = `republic-welcome:${CAMPAIGN_DATE}:${window.location.hostname}`;

    const active = campaignIsActive();
    setFlagVisible(active || bypass);

    // StrictMode/hot reload'da otomatik açılış bir kez karar verilir.
    if (!initializedRef.current) {
      initializedRef.current = true;
      let seen = false;
      try {
        seen = window.localStorage.getItem(storageKey.current) === 'seen';
      } catch {
        /* localStorage kapalı olabilir */
      }
      if (bypass || (active && !seen)) {
        if (writesStorage) {
          try {
            window.localStorage.setItem(storageKey.current, 'seen');
          } catch {
            /* localStorage kapalı olabilir */
          }
        }
        openWelcome();
      }
    }

    // Sayfa açık kalsa da kampanya bitişinde bayrak ve ekran kalksın.
    const check = () => {
      if (bypassRef.current) return;
      if (!campaignIsActive()) {
        setFlagVisible(false);
        requestClose(true);
      } else {
        setFlagVisible(true);
      }
    };
    const interval = window.setInterval(check, CHECK_INTERVAL_MS);
    const msToEnd = CAMPAIGN_END - Date.now();
    const endTimer =
      msToEnd > 0 && msToEnd < 2 ** 31 - 1 ? window.setTimeout(check, msToEnd) : 0;
    document.addEventListener('visibilitychange', check);
    window.addEventListener('focus', check);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(endTimer);
      document.removeEventListener('visibilitychange', check);
      window.removeEventListener('focus', check);
    };
  }, [openWelcome, requestClose]);

  // Açıkken: odak, kaydırma kilidi, klavye, 10 sn sayaç.
  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    skipRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        requestClose();
      } else if (event.key === 'Tab') {
        event.preventDefault();
        skipRef.current?.focus({ preventScroll: true });
      }
    };
    document.addEventListener('keydown', onKeyDown);

    const tick = window.setInterval(() => setRemaining((s) => Math.max(0, s - 1)), 1000);
    const autoClose = window.setTimeout(() => requestClose(), DISPLAY_SECONDS * 1000);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.clearInterval(tick);
      window.clearTimeout(autoClose);
      root.style.overflow = previousOverflow;
      const target = lastFocusedRef.current;
      if (target && typeof target.focus === 'function' && document.contains(target)) {
        target.focus({ preventScroll: true });
      }
    };
  }, [open, requestClose]);

  useEffect(() => () => window.clearTimeout(closeAnimationRef.current), []);

  return (
    <>
      {open && (
        <section className={`republic-welcome${closing ? ' is-closing' : ''}`}>
          <div className="republic-welcome__backdrop" aria-hidden="true" />
          <div
            className="republic-welcome__dialog"
            role="dialog"
            aria-modal="true"
            aria-label="29 Ekim Cumhuriyet Bayramı kutlaması"
          >
            <picture className="republic-welcome__picture">
              <source
                media="(max-width: 720px), (orientation: portrait)"
                srcSet="/campaigns/29-ekim-dikey.png"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/campaigns/29-ekim-kare.png"
                alt="Türkiye Büyük Millet Meclisi kürsüsünde Mustafa Kemal Atatürk; Türk bayraklarıyla 29 Ekim Cumhuriyet Bayramı kutlama afişi."
              />
            </picture>

            <div className="republic-welcome__controls">
              <div className="republic-welcome__timer" aria-label="Otomatik kapanma süresi">
                <span>{remaining}</span>
                <span className="sr-only">saniye</span>
              </div>
              <button
                ref={skipRef}
                className="republic-welcome__skip"
                type="button"
                onClick={() => requestClose()}
              >
                Geç
              </button>
            </div>

            <div className="republic-welcome__progress" aria-hidden="true">
              <span />
            </div>
          </div>
        </section>
      )}

      {flagVisible && (
        <button
          className="republic-flag"
          hidden={open}
          type="button"
          aria-label="29 Ekim kutlamasını yeniden aç"
          onClick={openWelcome}
        >
          <span className="republic-flag__pole" aria-hidden="true" />
          <span className="republic-flag__cloth" aria-hidden="true">
            <span className="republic-flag__moon">☾</span>
            <span className="republic-flag__star">★</span>
          </span>
        </button>
      )}
    </>
  );
}
