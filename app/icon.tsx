import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        }}
      >
        <div
          style={{
            color: 'black',
            fontSize: '18px',
            fontWeight: '900',
            letterSpacing: '0.1em',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          VERTICAL
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
