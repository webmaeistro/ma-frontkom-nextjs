import Link from 'next/link';
import IndexLayout from '../components/IndexLayout';
// import Button from '../components/atoms/Button';
import Container from '../components/atoms/Container';
import Title from '../components/atoms/Title';
import '../style.scss';

const Index = () => (
  <IndexLayout>
    <Container>
      <Title type="h1" size="h1">
        Martin Andersen Frontkom onboarding
      </Title>
      <Link href="post/[slug]" as="post/Martin-andersen-intro" skin="outline">
        <a>Go.</a>
      </Link>
    </Container>
  </IndexLayout>
);

export default Index;
