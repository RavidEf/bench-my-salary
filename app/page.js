import CarouselCompanies from './components/carousel';

export default function Home() {
  return (
    <>
      <section>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                Salary Benchmark for developers{' '}
              </h1>
              <p className="py-6">
                Check your worth, add your salary and see if your are getting
                properly compensated compared to the market.
              </p>
              <button className="btn btn-primary">Add salary</button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <CarouselCompanies />
      </div>
    </>
  );
}
