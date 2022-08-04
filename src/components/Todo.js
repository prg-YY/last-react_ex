import { useState } from "react"

import Modal from ".//Modal"
import Backdrop from ".//Backdrop"

const Todo = (props) => {
  const [showModal, setShowModal] = useState(false)

  const deleteHandler = (e) => {
    e.preventDefault()
    setShowModal(true)
  }
  const closeModalHandler = () => {
    setShowModal(false)
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>

      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          DELETE
        </button>
      </div>

      {showModal && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {showModal && <Backdrop onCancel={closeModalHandler} />}
    </div>
  )
}
export default Todo
