import { WorkContent } from '@/types';
import tw from 'tailwind-styled-components';

type IWorkDetailProps = WorkContent;
type IWorkDetailBlockProp = {
  name: string;
  content: string;
  className?: string;
};

const WorkDetailBlock: React.FC<IWorkDetailBlockProp> = ({ name, content, className }) => {
  return (
    <p className={className}>
      <Title>{name}</Title> {content}
    </p>
  );
};

const WorkDetail: React.FC<IWorkDetailProps> = ({ id, about, industry, metrics, role, content }) => {
  return (
    <WorkDetailContainer>
      <WorkDetailBlock name={id.replaceAll('-', ' ')} content={about} />
      {industry && <WorkDetailBlock name="Industry" content={industry.join(', ')} />}
      {metrics && <WorkDetailBlock name="Metrics" content={metrics.join(' | ')} />}
      {content && (
        <ul className="col-span-2 max-w-[750px]">
          <Title>Achievements</Title>
          {content.map((statement, idx) => (
            <li key={idx}>{statement}</li>
          ))}
        </ul>
      )}
      {role && <WorkDetailBlock className="row-start-2 lg:row-auto" name="Roles" content={role.join(', ')} />}
    </WorkDetailContainer>
  );
};

export default WorkDetail;

const Title = tw.sup`
  text-base
  text-blue-400
  uppercase
`;

const WorkDetailContainer = tw.div`
  grid
  grid-cols-2
  gap-12
  text-base
  lg:gap-24
  xl:grid-cols-3
`;
