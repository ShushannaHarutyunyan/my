import Modal from "react-modal";
import './BlogModal.css'
import { modalCustomStyles } from "./config";


const BlogModal = ({
  modal,
  currentBlog,
  handleBlogChange,
  handleModalBlogSave,
  handleModalClose
}) => {
  return (
    <Modal
      isOpen={modal}
      style={modalCustomStyles}
      contentLabel='Blog Modal'
    >
      <div>
        <div className='modal-title'>
          Edit Blog
        </div>
        <div className='blog-item'>
          <div>Title</div>
          <input
            name='title'
            value={currentBlog.title?? ''}
            onChange={handleBlogChange}
          />
        </div>
        <div className='blog-item text-item'>
          <div>Text</div>
          <textarea
            name='text'
            value={currentBlog.text}
            onChange={handleBlogChange}
          />
        </div>
        <div className='blog-item'>
          <div>Category</div>
          <input
            name='category'
            value={currentBlog.category ??''}
            onChange={handleBlogChange}
          />
        </div>
        <div className='modal-btns-container'>
          <button onClick={handleModalBlogSave}>Save</button>
          <button onClick={handleModalClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default BlogModal;
