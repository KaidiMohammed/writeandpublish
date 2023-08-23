import { Quill } from '../../_components/textEditors/quill';

export default async function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-between p-24">
        <Quill />
      </div>
    </>
  );
}
