import Fruit from "./Fruit";

export default function Fruits() {
    // const fruits=['Apple','Mango','Banana'];
    const fruits = [
        {
            name: "Apple",
            Price: 10,
            emoji: "🍎",
        },
        {
            name: "Mango",
            Price: 30,
            emoji: "🥭",
        },
        {
            name: "Orange",
            Price: 40,
            emoji: "🍊",
        },
        {
            name: "Pine-Apple",
            Price: 50,
            emoji: "🍍",
        },
    ];
    return (
        <div>
            <ul>
                {fruits.map((fruits) => (
                    <Fruit
                        key={fruits.name}
                        name={fruits.name}
                        price={fruits.Price}
                        emoji={fruits.emoji}
                    />
                ))}
            </ul>
        </div>
    );
}
