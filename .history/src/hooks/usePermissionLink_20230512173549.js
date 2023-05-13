import { useSelector } from "react-redux";

export default function usePermisstionLink({ permission = "", href }) {
  const { user } = useSelector((state) => state.auth);
}
