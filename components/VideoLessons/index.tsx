import ListCard from "../Base/ListCard";

interface VideoLesson {
  id: string;
  title: string;
  length: number;
}

const VideoLessons: React.FC<{lessons: VideoLesson[]}> = ({lessons, ...props}) => {
  return (
    <ListCard
      title="Video Files"
      data={lessons}
      emptyMessage="No videos to display."
      keyExtractor={(item: VideoLesson) => item.id}
      renderItem={(item: VideoLesson) => <div>Not Implemented</div>}
    />
  )
}

export { VideoLessons };