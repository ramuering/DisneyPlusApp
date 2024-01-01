import { useEffect } from "react";

export default function useOnClickOutside(ref, handler) {
  //ref -> 클릭 위치 확인, handler -> 모달창 동작
  useEffect(() => {
    //모달 창 바깥을 클릭하면 Callback 함수를 호출하는 Event 등록
    const listener = (event) => {
      //클릭 시 모달 창 내부일 경우 그냥 return
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      //touch가 안될 떄 이벤트 해제
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
