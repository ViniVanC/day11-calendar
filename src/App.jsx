import { Container } from "./components/Container";
import { useCalendar } from "./hook/useCalendar";

function App() {
  const { day, monthName, monthDays, year } = useCalendar();
  console.log(day, monthName, monthDays, year);
  return (
    <div className="flex h-[100vh] items-center justify-center overflow-x-hidden bg-gradient-yellowPink">
      <Container />
    </div>
  );
}

export default App;
