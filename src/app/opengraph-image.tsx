import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Lumière - Fine Jewelry Collection';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#fafafa',
            zIndex: -1,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 300,
              letterSpacing: '0.2em',
              color: '#212121',
              marginBottom: '24px',
            }}
          >
            LUMIÈRE
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#b89660',
              letterSpacing: '0.1em',
              marginBottom: '40px',
              textTransform: 'uppercase',
            }}
          >
            Fine Jewelry Collection
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#333333',
              maxWidth: '600px',
              textAlign: 'center',
            }}
          >
            Handcrafted elegance for life's most precious moments
          </div>

          <div
            style={{
              width: '40px',
              height: '2px',
              background: '#b89660',
              margin: '40px 0',
            }}
          />

          <div
            style={{
              fontSize: '18px',
              color: '#666666',
              letterSpacing: '0.05em',
            }}
          >
            www.lumierejewelry.com
          </div>
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '50px',
            left: '50px',
            width: '100px',
            height: '100px',
            border: '1px solid rgba(184, 150, 96, 0.3)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            right: '50px',
            width: '150px',
            height: '150px',
            border: '1px solid rgba(184, 150, 96, 0.2)',
            borderRadius: '50%',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
} 