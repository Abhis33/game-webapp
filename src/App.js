import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";
import { useEffect } from "react";

function App() {
  const defaultValues = {
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0,
  };
  const [num, setNum] = useState(0);

  const [requirement, setRequirement] = useState(false);
  const [classStat, setClassStat] = useState({});

  const [attributes, setAttributes] = useState(defaultValues);
  const [modifiers, setModifiers] = useState({});
  const [metRequirement, setMetRequirement] = useState(new Set());

  const [skillPointAvailable, setSkillPointAvailable] = useState(20);

  const skillListDefaultValues = SKILL_LIST.reduce((prev, skill) => ({...prev, [skill.key]: 0 }), {})
  const [skillList, setSkillList] = useState(skillListDefaultValues);

  const handleMeetRequirement = () => {
    let result = [];
    const list = new Set();

    for (const key in CLASS_LIST) {
      Object.keys(CLASS_LIST[key]).forEach((attr) => {
        if (CLASS_LIST[key][attr] <= attributes[attr.toLocaleLowerCase()]) {
          result.push(true);
        } else {
          result.push(false);
        }
      });

      if (result.includes(false)) {
        list.delete(key);
        setMetRequirement(list);
      } else {
        list.add(key);
        setMetRequirement(list);
      }
      result = [];
    }
  };

  const handleAttributes = (attrName, direction) => {
    switch (attrName) {
      case "Strength":
        const value =
          direction === "up"
            ? attributes["Strength"] + 1
            : attributes["Strength"] - 1;
        setAttributes({ ...attributes, Strength: value });
        setModifiers({ ...modifiers, Strength: getPoints(value) });
        handleMeetRequirement();
        break;
      case "Dexterity":
        const Dexterity =
          direction === "up"
            ? attributes["Dexterity"] + 1
            : attributes["Dexterity"] - 1;
        setAttributes({
          ...attributes,
          Dexterity: Dexterity,
        });
        setModifiers({ ...modifiers, Dexterity: getPoints(Dexterity) });
        handleMeetRequirement();
        break;
      case "Constitution":
        const newConstitution =
          direction === "up"
            ? attributes["Constitution"] + 1
            : attributes["Constitution"] - 1;
        setAttributes({
          ...attributes,
          Constitution: newConstitution,
        });
        setModifiers({
          ...modifiers,
          Constitution: getPoints(newConstitution),
        });
        handleMeetRequirement();
        break;
      case "Intelligence":
        const newIntelligence =
          direction === "up"
            ? attributes["Intelligence"] + 1
            : attributes["Intelligence"] - 1;
        setAttributes({
          ...attributes,
          Intelligence: newIntelligence,
        });
        setModifiers({
          ...modifiers,
          Intelligence: getPoints(newIntelligence),
        });
        handleMeetRequirement();
        break;
      case "Wisdom":
        const newWisdom =
          direction === "up"
            ? attributes["Wisdom"] + 1
            : attributes["Wisdom"] - 1;
        setAttributes({ ...attributes, Wisdom: newWisdom });
        setModifiers({ ...modifiers, Wisdom: getPoints(newWisdom) });
        handleMeetRequirement();
        break;
      case "Charisma":
        const newCharisma =
          direction === "up"
            ? attributes["Charisma"] + 1
            : attributes["Charisma"] - 1;
        setAttributes({ ...attributes, Charisma: newCharisma });
        setModifiers({ ...modifiers, Charisma: getPoints(newCharisma) });
        handleMeetRequirement();
        break;

      default:
        break;
    }
  };

  const handleSkillListChange = (attrName, direction) => {
    const value =
      direction === "up"
        ? skillList[attrName] + 1
        : skillList[attrName] - 1;
        setSkillList({ ...skillList, [attrName]: value });
  };

  const showRequiredStat = (name) => {
    setRequirement(true);
    setClassStat(CLASS_LIST[name]);
    return CLASS_LIST[name];
  };

  const getPoints = (value) => {
    let point;
    if (value >= 10) {
      const over = value - 10;
      point = Math.round(over / 2);
      return point;
    }

    if (value < 10) {
      const over = 10 - value;
      const point = Math.round(over / 2);
      return -point;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div>
          Value:
          {num}
          <button onClick={() => setNum(num + 1)}>+</button>
          <button>-</button>
        </div>
        <table>
          <div id="grid">
            <td id="item1" className="col-sm-4">
              <h2>Attributes</h2>
              <div>
                Strength: {attributes.Strength} (Modifier: {modifiers.Strength})
                <button onClick={() => handleAttributes("Strength", "up")}>
                  +
                </button>
                <button onClick={() => handleAttributes("Strength", "down")}>
                  -
                </button>
              </div>
              <div>
                Dexterity: {attributes.Dexterity} (Modifier: {modifiers.Dexterity}
                )
                <button onClick={() => handleAttributes("Dexterity", "up")}>
                  +
                </button>
                <button onClick={() => handleAttributes("Dexterity", "down")}>
                  -
                </button>
              </div>
              <div>
                Constitution: {attributes.Constitution} (Modifier:{" "}
                {modifiers.Constitution})
                <button onClick={() => handleAttributes("Constitution", "up")}>
                  +
                </button>
                <button onClick={() => handleAttributes("Constitution", "down")}>
                  -
                </button>
              </div>
              <div>
                Intelligence: {attributes.Intelligence} (Modifier:{" "}
                {modifiers.Intelligence})
                <button onClick={() => handleAttributes("Intelligence", "up")}>
                  +
                </button>
                <button onClick={() => handleAttributes("Intelligence", "down")}>
                  -
                </button>
              </div>
              <div>
                Wisdom: {attributes.Wisdom} (Modifier: {modifiers.Wisdom})
                <button onClick={() => handleAttributes("Wisdom", "up")}>
                  +
                </button>
                <button onClick={() => handleAttributes("Wisdom", "down")}>
                  -
                </button>
              </div>
              <div>
                Charisma: {attributes.Charisma} (Modifier: {modifiers.Charisma})
                <button onClick={() => handleAttributes("Charisma", "up")}>
                  +
                </button>
                <button onClick={() => handleAttributes("Charisma", "down")}>
                  -
                </button>
              </div>
            </td>
            {' '}
            <td id="item2"  className="col-sm-4">
              <h2>Classes</h2>
              {Object.keys(CLASS_LIST).map((cl, i) => {
                const color = metRequirement.has(cl)
                  ? "met_requirment"
                  : "disable";
                return (
                  <span
                    key={i}
                    onClick={() => showRequiredStat(cl)}
                    className={color}
                  >
                    {cl}
                    <br />
                  </span>
                );
              })}
            </td>
            {' '}
            {requirement && (
              <td id="item3" className="col-sm-4">
                <h2>Minimum required statistics</h2>
                {Object.keys(classStat).map((cl, i) => {
                  return (
                    <span key={i}>
                      {cl}: {classStat[cl]}
                      <br />
                    </span>
                  );
                })}
                <div className="requirement_view">
                  <button onClick={() => setRequirement(false)}>
                    Close Requirement View
                  </button>
                </div>
              </td>
            )}
            {' '}
            <td id="item4" className="col-sm-4">
              <h2>Skills</h2>
              <div>Total Skill points Available: {skillPointAvailable}</div>
              <br/>
              {SKILL_LIST.map((skill) => {
                return (<>
                  <div>{skill.name}: {skillList[skill.key]} (Modifier: {skill.attributeModifier}): {modifiers[skill.attributeModifier]} {' '}
                  <button onClick={() => handleSkillListChange(skill.key, "up")}>
                    +
                  </button>
                  <button onClick={() => handleSkillListChange(skill.key, "down")}>
                    -
                  </button> {' '}
                  Total: {skillList[skill.key] + modifiers[skill.attributeModifier]}
                  </div>
                </>)
              })}
            </td>
            {' '}
            </div>
        </table>
      </section>
    </div>
  );
}

export default App;