import { Button, Modal } from 'react-bootstrap';
import './BookTableLeft.css';

const BookTableLeft = () => {
  return (
    <div>
      <div className="video">
        <Button
          type="button"
          className="btn-play"
          data-bs-toggle="modal"
          data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
          data-bs-target="#videoModal"
        >
          <span></span>
        </Button>
      </div>

      <Modal show={false} id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <Modal.Dialog>
          <Modal.Content className="rounded-0">
            <Modal.Header>
              <Modal.Title id="exampleModalLabel">Youtube Video</Modal.Title>
              <Button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
            </Modal.Header>
            <Modal.Body>
              {/* 16:9 aspect ratio */}
              <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allow="always"></iframe>
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};

export default BookTableLeft;
