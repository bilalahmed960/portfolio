/* ==================================== Audit Log ======================================== *
 * Created on: 23/03/23
 * Description: This file refers to indivisual project detail page.
/* ======================================================================================== */
import { useRouter } from "next/router";
const ProjectSingle = () => {
  const router = useRouter();
  const { id } = router.query;
  return <h1 className="text-3xl font-bold underline">Project {id}</h1>;
};
export default ProjectSingle;
