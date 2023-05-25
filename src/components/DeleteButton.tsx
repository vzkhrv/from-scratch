type Props = {
    onClick: () => void;
}
export const DeleteButton = ({ onClick }: Props) => {
  return (
    <button className="button" onClick={onClick}>
      <img src="../icons/trash.png" alt="Удалить" />
    </button>
  )
}
