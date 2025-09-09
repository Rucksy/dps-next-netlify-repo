import { useEffect } from 'react';

interface AdSlotProps {
  /**
   * A human‑friendly label for the ad slot. This is optional but can help
   * identify individual placements when you later configure AdSense.    
   */
  label?: string;
  /**
   * The ad slot ID from your AdSense account. Leave undefined until you
   * configure the real IDs in production.
   */
  slot?: string;
}

/**
 * A small wrapper component for AdSense ad units. It reserves some
 * vertical space to minimize layout shift and injects the ad once the
 * page has mounted on the client.
 */
const AdSlot: React.FC<AdSlotProps> = ({ label, slot }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
      try {
        (window as any).adsbygoogle.push({});
      } catch (e) {
        // Ignore errors on first render; AdSense script might not be loaded yet.
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', width: '100%', minHeight: '100px' }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
      data-ad-slot={slot}
      aria-label={label}
    />
  );
};

export default AdSlot;