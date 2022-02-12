import Schedule from "../components/ScheduleMap";

function schedule() {
  return (
    <div>
      <div className="hidden lg:block 3xl:hidden">
        <div className="hor absolute top-32 left-0 right-0">
          <img
            src="https://user-images.githubusercontent.com/64256342/153624332-dee821db-58d5-4aa2-bcd4-7ecdd76d4e76.svg"
            alt="line"
          />
        </div>
        {/* <div className="absolute left-[16.35rem] top-0">
          <img
            src="https://user-images.githubusercontent.com/64256342/153626648-efc6d52f-38fa-4248-ab00-961b6da78a34.svg"
            alt="line"
          />
        </div> */}
      </div>
      <div>
        <div className="relative">
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default schedule;
