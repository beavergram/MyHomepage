import React, { useRef, useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import emailjs from "@emailjs/browser";
const SendEmail = () => {
  // const [data, setData] = useState("");
  // const handleChangeText = (e, editor) => {
  //   setData(editor.getData());
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c45kt5e",
        "template_y3p069r",
        form.current,
        "txgM6z9FETkD_4u9d"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full px-3 max-w-3xl md:mx-auto">
      <form ref={form} onSubmit={sendEmail}>
        {/* <CKEditor
          editor={ClassicEditor}
          config={{ placeholder: "내용을 입력하세요." }}
          data="<p></p>"
          onChange={(e, editor) => {
            // const data = editor.getData();
            handleChangeText(e, editor);
            // console.log({ event, editor, data });
          }}
        /> */}
        <div className="text-left ">
          <div className="flex mb-1">
            <strong className="w-20">
              <label className="">회사</label>
            </strong>
            <input
              type="text"
              name="user_company"
              className="border-2 flex-1"
              placeholder="회사를 입력해주세요."
            />
          </div>
          <div className="flex mb-1">
            <strong className="w-20">
              <label className="">이름</label>
            </strong>
            <input
              type="text"
              name="user_name"
              className="border-2 flex-1"
              placeholder="이름을 입력해주세요."
            />
          </div>
          <div className="flex mb-1">
            <strong className="w-20">
              <label className="">이메일</label>
            </strong>
            <input
              type="email"
              name="user_email"
              className="border-2 flex-1"
              placeholder="이메일을 입력해주세요."
            />
          </div>
          <div className="flex mb-1">
            <strong className="w-20">
              <label className="">전화번호</label>
            </strong>
            <input
              type="tel"
              name="user_email"
              className="border-2 flex-1"
              placeholder="전화번호를 입력해주세요."
            />
          </div>
          <div className="flex mb-1">
            <strong className="w-20">
              <label className="">제목</label>
            </strong>
            <input
              type="text"
              name="subject"
              className="border-2 flex-1"
              placeholder="제목을 입력해주세요."
            />
          </div>
        </div>
        {/* <label>내용</label> */}
        <div>
          <textarea
            name="message"
            className="border-2 w-full"
            placeholder="내용을 입력해주세요."
            rows="10"
          />
        </div>
        <div className="flex">
          <button
            type="submit"
            className="ml-auto
          justify-center rounded-md 
          bg-sky-900 px-3 py-2 text-sm text-white hover:bg-sky-600"
            onClick={() => {
              alert("메일이 전송되었습니다.");
            }}
          >
            보내기
          </button>
        </div>

        {/* <input type="submit" value="보내기" /> */}
      </form>
    </div>
  );
};

export default SendEmail;
