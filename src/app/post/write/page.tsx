import dynamic from 'next/dynamic';

import { BsFillPencilFill } from 'react-icons/bs';
import { TbSend } from 'react-icons/tb';

import Button from '../../_components/Button';

const Editor = dynamic(() => import('../../_components/TextEditor/Quill'), {
  ssr: false,
});

export default async function Page() {
  return (
    <>
      <div className="flex items-center flex-col justify-between p-24">
        <Editor />
        <div className="flex justify-between gap-14 mt-5 flex-wrap">
          <Button primary rounded>
            Publish
            <TbSend />
          </Button>
          <Button disabled secondary rounded>
            Save as draft
            <BsFillPencilFill />
          </Button>
        </div>
      </div>
    </>
  );
}
