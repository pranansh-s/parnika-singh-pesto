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
      <Title>{name}</Title>&nbsp;{content}
    </p>
  );
};

const WorkDetail: React.FC<IWorkDetailProps> = ({ id, about, industry, metrics, role, content }) => {
  return (
    <WorkDetailContainer>
      <WorkDetailBlock name={id.replaceAll('-', ' ')} content={about} />
      {industry && <WorkDetailBlock name="Industry" content={industry.join(', ')} />}
      {role && <WorkDetailBlock className="row-start-2 lg:row-auto" name="Roles" content={role.join(', ')} />}
      {content && (
        <ul className="col-span-2 list-inside list-disc">
          <Title>Achievements</Title>
          {content.map((statement, idx) => (
            <li key={idx}>{statement}</li>
          ))}
        </ul>
      )}
      {metrics && <WorkDetailBlock name="Metrics" content={metrics.join(' | ')} />}
    </WorkDetailContainer>
  );
};

export default WorkDetail;

const Title = tw.sup`
  text-xs
  font-bold
  text-blue-400
  uppercase
`;

const WorkDetailContainer = tw.div`
  grid
  grid-cols-2
  gap-10
  font-sans
  text-sm
  lg:gap-16
  xl:grid-cols-3
`;
