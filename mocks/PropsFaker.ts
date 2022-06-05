import { faker } from "@faker-js/faker";
import { SummaryCardProps } from "../components/Directory/SummaryCard";

function mockSummaryCardProps(): SummaryCardProps {
  return {
    name: faker.name.findName(),
    pronouns: faker.helpers.arrayElement(['she/her', 'they/them', 'he/him']),
    instruments: faker.helpers.arrayElements(['piano', 'guitar', 'violin', 'viola', 'cello', 'bass', 'voice']),
    ageGroups: faker.helpers.arrayElements(['All ages', '12+', '11+', '13-18', 'Adults'], 1),
    about: faker.lorem.paragraph(),
    avatarUrl: faker.helpers.maybe(() => faker.image.avatar())
  };
}

function many<PropType>(n: number, faker: () => PropType): PropType[] {
  const props: PropType[] = [];
  for(let i = 0; i < n; i++) {
    props.push(faker())
  }
  return props;
}

const MockPropsUtil = {
  summaryCard: {
    one: mockSummaryCardProps,
    many: (n: number) => many(n, mockSummaryCardProps),
  }
};

export default MockPropsUtil;