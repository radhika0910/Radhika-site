import MainDiv from "./component/MainDiv";
import MatrixRainBackground from './component/Themes/MartixRainBackground';




export default function Home() {
  return (
    <main className="flex bg-[#121212] ">
       <div>
      <MatrixRainBackground />
      <MainDiv>
        <h1 className="text-4xl font-bold text-white">Hello World</h1>
      </MainDiv>
    </div>
     

    </main>
  );
}
