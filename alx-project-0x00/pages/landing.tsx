import Card from "@/components/Card"
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <div className="flex gap-4 mt-4">

  {/* SMALL BUTTONS */}
  <Button title="Small Rounded" style="text-sm rounded-sm bg-blue-500" />
  <Button title="Small Medium" style="text-sm rounded-md bg-blue-500" />
  <Button title="Small Full" style="text-sm rounded-full bg-blue-500" />

</div>

<div className="flex gap-4 mt-4">

  {/* MEDIUM BUTTONS */}
  <Button title="Medium Rounded" style="text-md rounded-sm bg-green-500" />
  <Button title="Medium Medium" style="text-md rounded-md bg-green-500" />
  <Button title="Medium Full" style="text-md rounded-full bg-green-500" />

</div>

<div className="flex gap-4 mt-4">

  {/* LARGE BUTTONS */}
  <Button title="Large Rounded" style="text-lg rounded-sm bg-red-500" />
  <Button title="Large Medium" style="text-lg rounded-md bg-red-500" />
  <Button title="Large Full" style="text-lg rounded-full bg-red-500" />

</div>


      <Card />
    </div>
  )
}
export default Landing
