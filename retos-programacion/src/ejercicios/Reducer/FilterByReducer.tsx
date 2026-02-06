type Tipados = {
  name: string;
  age: number;
};

const people: Tipados[] = [
  // Menores de edad
  { name: "Alicia", age: 15 },
  { name: "Bruno", age: 12 },
  { name: "Carla", age: 17 },

  // Adultos (18–50)
  { name: "Patricio", age: 30 },
  { name: "Ana", age: 25 },
  { name: "Carlos", age: 40 },
  { name: "María", age: 22 },
  { name: "Jorge", age: 35 },

  // Mayores (>50)
  { name: "Elena", age: 60 },
  { name: "Ricardo", age: 55 },
];

type Grouped = {
  menores: Tipados[];
  mayores: Tipados[];
  ancianos: Tipados[];
};

const FilterByReducer = () => {
  const group: Grouped = people.reduce(
    (acc: Grouped, item) => {
      if (item.age < 18) {
        acc.menores.push(item);
      } else if (item.age < 50) {
        acc.mayores.push(item);
      } else {
        acc.ancianos.push(item);
      }
      return acc;
    },
    { menores: [], mayores: [], ancianos: [] },
  );
  return (
    <section>
        <div>
          <p>Cantida de menores {group.menores.length} </p>
          {group.menores.map((p) => (
            <p key={p.name}>{p.name}</p>
          ))}
        </div>

        <div>
            Cantidad de adultos {group.mayores.length}
            {group.mayores.map((p) => (
                <p key={p.name}>{p.name}</p>
            ))}
        </div>

        <div>
            Cantidad de ancianos {group.ancianos.length}
            {group.ancianos.map((p) => (
                <p key={p.name}>{p.name}</p>
            ))}
        </div>
    </section>
  );
};

export default FilterByReducer;
