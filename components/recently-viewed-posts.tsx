import { cookies } from "next/headers";

export default function RecentlyViewedPosts() {
  const cookiesStore = cookies();
  return (
    <div>
      <h2>Recently Viewed Posts</h2>
      <ul></ul>
    </div>
  );
}
