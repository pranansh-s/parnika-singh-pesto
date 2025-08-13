import { redirect } from 'next/navigation';

import tw from 'tailwind-styled-components';

import Gallery from '@/components/gallery';
import WorkDetail from '@/components/work/WorkDetail';

import { WORK_PAGES } from '@/constants/work-content';

export async function generateStaticParams() {
  return WORK_PAGES.map(page => ({ workId: page.id }));
}

export default async function WorkPage({ params }: { params: { workId: string } }) {
  const { workId } = await params;
  const pageContent = WORK_PAGES.find(content => content.id === workId);
  if (!pageContent) return redirect('/');

  return (
    <WorkPageContainer>
      <WorkDetail {...pageContent} />
      <Gallery paths={pageContent.display} />
    </WorkPageContainer>
  );
}

const WorkPageContainer = tw.div`
  mt-16
  space-y-12
  md:mt-24
  lg:space-y-20
`;
