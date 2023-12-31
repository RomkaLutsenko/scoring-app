import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

// const props: UploadProps = {
//   name: 'filename', // это название колонки в БД
//   multiple: true,
//   action: 'http://127.0.0.1:8000/api/files/', // путь куда передавать данные
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
//   onDrop(e) {
//     console.log('Dropped files', e.dataTransfer.files);
//   },
// };

function onDropHandler(e) {
  e.preventDefault()
    console.log('Dropped files', e.dataTransfer.files);
}

const UploadPage_UploadBlock: React.FC = () => (

    <Dragger
        style={{width: "800px", padding:"50px 0", marginBottom: "280px"}}
        onDrop={(e) => {onDropHandler(e)}}
    >
        <p className="ant-upload-drag-icon">
            <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from uploading company data or other
            banned files.
        </p>
    </Dragger>
);

export default UploadPage_UploadBlock;



