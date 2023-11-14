export default function Playground() {
  const exampleArray = ["Boom Lift", "Scissor Lift", "Forklift"];
  console.log("what's last?", exampleArray.at(-1));

  //   const dude = {name: 'jeff'};
  //   const bro = dude;
  //   bro.name = 'bob';
  //   console.log('dude name', dude.name);

  const dude = { name: "jeff" };
  const bro = structuredClone(dude);
  bro.name = "bob";
  console.log("dude name", dude.name);
  return (
    <div>
      <h1>Playground</h1>
      <p className="initial-letter">
        My first letter is real pretty. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <button
        id="show-dialog"
        onClick={() => {
          const dialog = document.getElementById(
            "cool-dialog"
          ) as HTMLDialogElement;
          dialog?.showModal();
        }}
      >
        show dialog
      </button>
      <dialog id="cool-dialog">
        <h2>look how cool i look</h2>
        <p>Greetings, one and all!</p>
        <form method="dialog">
          <button>OK</button>
        </form>
      </dialog>

      {/* <button popovertarget="popover" popovertargetaction="show">
        Open Popover
      </button>
      <button popovertarget="popover" popovertargetaction="hide">
        Open Popover
      </button>
      <div popover id="popover">
        Greetings, one and all!
      </div> */}
    </div>
  );
}
