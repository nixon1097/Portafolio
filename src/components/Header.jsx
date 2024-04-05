function Header({ Trans, t }) {
  return (
    <>
      <p>
        <Trans i18nKey="description.part1">
          Edit <code>src/App.js</code> and save to reload.
        </Trans>
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("description.part2")}
      </a>
    </>
  );
}

export default Header;
