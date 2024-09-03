import { useGetCourses } from "../../hooks/useGetCourses";

export default function ProductPage() {
  const { data } = useGetCourses();
  console.log(data);

  return <div>hi</div>;
}
