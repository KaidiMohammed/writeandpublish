import Quill from '@/src/app/_components/TextEditor/Quill';

export default async function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-between p-24">
        <Quill />
      </div>
    </>
  );
}
