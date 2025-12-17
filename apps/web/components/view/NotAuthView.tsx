import { ChevronRight, Palette, Shield } from 'lucide-react';
import Link from 'next/link';

import { NewsButton } from '@/app/(main)/user/NewsButton';
import { NewsPanel } from '@/app/(main)/user/NewsPanel';

import { Card } from '@/components/card';
import { Text } from '@/components/text';

interface Props {
  text: string;
}

export function NotAuthView(props: Props) {
  const { text } = props;

  return (
    <>
      <NewsButton />
      <NewsPanel />

      <Card.MAIN text={text}>
        <Card.SECTION text="로그인이 필요합니다.">
          <Link href="/auth/login" className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Text.HEADING text="로그인 하러 가기" />
            </div>
            <ChevronRight />
          </Link>
        </Card.SECTION>

        <Card.SECTION text="설정">
          <Link href="/user/setting/theme" className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Palette size={20} />
              <Text.HEADING text="테마 설정" />
            </div>
            <ChevronRight />
          </Link>
        </Card.SECTION>

        <Card.SECTION text="지원">
          <Link href="/privacy" className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield size={20} />
              <Text.HEADING text="개인정보 처리방침" />
            </div>
            <ChevronRight />
          </Link>
        </Card.SECTION>
      </Card.MAIN>
    </>
  );
}
