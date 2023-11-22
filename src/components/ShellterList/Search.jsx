import { useState,useEffect,useContext ,useRef} from "react";
import ShowShellters from "./ShowShellters";
import { async } from "q";
import { AppContext } from "../KakaoPostService/PostBind";
import axios from "axios";
import { useCallback } from "react";
import { memo } from "react";
import { ListGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';


function Search(props) {
  const [shelters, setShelters] = useState([]);
  const [showModal, setShowModal] = useState(false); // 모달 표시 상태

  useEffect(() => {
    const fd = new FormData();
    fd.append("address", props.address);
    
    axios({
      method: "POST",
      url: "http://20.39.196.195:8080/search",
      data: fd,
    })
    .then((res) => {
      console.log("res suceess")
      const shelterData = res.data.shelter;
      setShelters(shelterData);
      setShowModal(true); // 데이터 로드 후 모달 표시
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "서버와 연결에 오류가 있습니다."
    })
    });
  
  }, [props.address]);

  const modalClose = () => {
    setShowModal(false); // 모달 숨기기
  };

  return (
    <div>
      {showModal && ( // showModal 상태에 따라 모달 표시
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>대피소 목록</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {shelters.map (element => {
                return <ListGroup as="ol" numbered >
                <ListGroup.Item as="li">{element.shelterName} {element.shelterAddress} {element.distance} 
                <Button href={element.directionUrl}>카카오 맵에서 길찾기</Button></ListGroup.Item>
            </ListGroup>
            })}

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={modalClose}>닫기</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
    </div>
  );
}

export default memo(Search);