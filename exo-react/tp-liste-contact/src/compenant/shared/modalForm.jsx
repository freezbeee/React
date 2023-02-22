import classes from './ModalComponent.module.css'

const ModalComponentForm = (props) => {

  const closeModalHandler = (event) => {
    if (event.target === event.currentTarget) {
      props.closeModal()
    }
  }

  return (
    <div className='bg'>
    <div className={classes.modal} onClick={closeModalHandler}>
      <div className={classes['modal-content']}>
        {props.children}
      </div>
    </div>
    </div>
  )
}

export default ModalComponentForm