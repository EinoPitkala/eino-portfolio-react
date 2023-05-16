import ClientProjects from "../components/project/ClientProjects";

const Clients = () => {
  return (
    <>
      <div className="header-content">
        <h1 className="subpage-header color-text">My Clients</h1>
        <p>Here are the clients from my company, Eino IT</p>
      </div>
      <ClientProjects />
    </>
  );
};
export default Clients;
