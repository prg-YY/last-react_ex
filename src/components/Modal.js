const Modal = (props) => {
  const confirmHandler = () => {
    props.onConfirm()
  }

  const canselHandler = () => {
    props.onCansel()
  }
  return (
    <div className="modal">
      <p>Are you Sure?</p>
      <button className="btn btn--alt" onClick={canselHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  )
}

export default Modal
