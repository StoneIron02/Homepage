import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-primary text-text-primary">
      <h1 className="text-8xl font-bold text-gold">404</h1>
      <p className="mt-4 text-xl text-text-secondary">
        페이지를 찾을 수 없습니다.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg border border-gold/30 px-6 py-3 text-gold transition-colors hover:bg-gold/10"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
