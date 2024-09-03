import { useGetCourses } from "../../hooks/useGetCourses";

export default function ProductPage() {
  const { data, isLoading, error } = useGetCourses();
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  return (
    <div>
      {data?.results.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
