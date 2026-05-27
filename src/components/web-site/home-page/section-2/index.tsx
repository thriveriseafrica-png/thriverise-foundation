"use client";
import { useCounter } from "@/hooks/counter.hooks";

export default function Section2() {
  const { count: studentsCount, countRef: refStudent } = useCounter(1000, 5000);
  const { count: hourCount, countRef: refHour } = useCounter(100, 5000);
  const { count: countCenters, countRef: refCenters } = useCounter(1, 5000);
  const { count: countAmbassadors, countRef: refAmbassadors } = useCounter(
    15,
    5000,
  );

  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <div className="container mx-auto grid gap-16.5 sm:gap-20 place-items-center text-[#183668]">
        <div className="max-w-xl grid">
          <h1 className="uppercase font-bold text-center text-3xl">
            Our Impact So Far
          </h1>
        </div>

        {/* Content */}
        <div className="px-5 mx-auto grid sm:grid-cols-2 xl:grid-cols-4 gap-5 text-center xl:text-left [&>div]:grid [&>div]:gap-7 [&_span]:text-3xl sm:[&_span]:text-5xl [&_span]:font-bold">
          <div ref={refStudent}>
            <span>{studentsCount}+</span>
            <p>Students Reached through resource drives & events</p>
          </div>
          <div ref={refHour}>
            <span>{hourCount}+</span>
            <p>Volunteer Hours contributed by teachers & mentors</p>
          </div>
          <div ref={refCenters}>
            <span>{countCenters}</span>
            <p>Active Learning Center with more on the way</p>
          </div>
          <div ref={refAmbassadors}>
            <span>{countAmbassadors}</span>
            <p>University Ambassadors driving awareness nationwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
