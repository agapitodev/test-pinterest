import { SearchImages } from '@/app/_components/dashboard';
import { Grid } from '@/app/_components/ui/base';

function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

const FakeImage = () => {
  const style = {
    borderRadius: 8,
    background: 'red',
    height: `${getRandomArbitrary(150, 400)}px`,
    width: '100%',
  };
  return <div style={style} />;
};

export default function Dashboard() {
  const fakeList = new Array(25).fill('fake');
  return (
    <div>
      <SearchImages />
      <Grid>
        {fakeList.map((el, index) => (
          <FakeImage key={index} />
        ))}
      </Grid>
    </div>
  );
}
