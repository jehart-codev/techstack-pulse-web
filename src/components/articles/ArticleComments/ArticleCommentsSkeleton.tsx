import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ArticleCommentsSkeleton = () => {
  return (
    <>
      <Stack spacing={1} className="mt-6">
        <Stack spacing={1} direction="row">
          <Skeleton variant="circular" width={50} height={40} />

          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="100%" />
        </Stack>

        <Skeleton variant="rounded" width="100%" height={60} />
      </Stack>

      <Stack spacing={1} className="mt-6">
        <Stack spacing={1} direction="row">
          <Skeleton variant="circular" width={50} height={40} />

          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="100%" />
        </Stack>

        <Skeleton variant="rounded" width="100%" height={60} />
      </Stack>

      <Stack spacing={1} className="mt-6">
        <Stack spacing={1} direction="row">
          <Skeleton variant="circular" width={50} height={40} />

          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="100%" />
        </Stack>

        <Skeleton variant="rounded" width="100%" height={60} />
      </Stack>
    </>
  );
};

export default ArticleCommentsSkeleton;
