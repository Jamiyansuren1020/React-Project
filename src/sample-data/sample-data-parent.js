import React, { useReducer, useState } from "react";

const DataManipulationEx = () => {
  const [sampleData, setSampleData] = useState({
    name: "John",
    additionalData: {
      instructor: true,
      favoriteHobbies: ["Coding", "Playing Basketball"],
      favoriteFood: {
        type: "soup",
        includeNoodle: true,
      },
      moreDetails: {
        favoriteBasketballPlayer: "Kyrie Irving",
        numberOfSiblings: 5,
        isYoungest: true,
        hometown: {
          city: "Portland",
          state: "OR",
        },
        citiesLivedIn: ["Portland", "Chicago", "Ulaanbaatar"],
      },
    },
  });
  return (
    <div>
      <pre>{JSON.stringify(sampleData, null, 2)}</pre>
      <button
        onClick={() => {
          setSampleData((currState) => {
            return { ...currState, name: "James" };
          });
        }}
      >
        Change Name
      </button>
      <button
        onClick={() => {
          setSampleData((currState) => {
            return {
              ...currState,
              additionalData: {
                ...currState.additionalData,
                favoriteHobbies: [
                  ...currState.additionalData.favoriteHobbies,
                  "PlayDota2",
                ],
              },
            };
          });
        }}
      >
        Add Hobby
      </button>
      <button
        onClick={() => {
          setSampleData((currState) => {
            return {
              ...currState,
              additionalData: {
                ...currState.additionalData,
                favoriteFood: {
                  ...currState.additionalData.favoriteFood,
                  includeNoodle: false,
                },
              },
            };
          });
        }}
      >
        Noodle
      </button>
      <button
        onClick={() => {
          setSampleData((currState) => {
            return {
              ...currState,
              additionalData: {
                ...currState.additionalData,
                moreDetails: {
                  ...currState.additionalData.moreDetails,
                  isYoungest: false,
                },
              },
            };
          });
        }}
      >
        Youngest
      </button>
      <button
        onClick={() => {
          setSampleData((currState) => {
            return {
              ...currState,
              additionalData: {
                ...currState.additionalData,
                moreDetails: {
                  ...currState.additionalData.moreDetails,
                  hometown: {
                    ...currState.additionalData.moreDetails.hometown,
                    state: "Il",
                  },
                },
              },
            };
          });
        }}
      >
        Home State
      </button>
      <button
        onClick={() => {
          setSampleData((currState) => {
            return {
              ...currState,
              additionalData: {
                ...currState.additionalData,
                moreDetails: {
                  ...currState.additionalData.moreDetails,
                  citiesLivedIn:
                    currState.additionalData.moreDetails.citiesLivedIn.filter(
                      (newCity) => {
                        return newCity !== "Ulaanbaatar";
                      }
                    ),
                },
              },
            };
          });
        }}
      >
        City
      </button>
      <button
        onClick={() => {
          setSampleData((currState) => {
            return {
              ...currState,
              additionalData: {
                ...currState.additionalData,
                moreDetails: {
                  ...currState.additionalData.moreDetails,
                  citiesLivedIn: [...currState.additionalData.moreDetails.citiesLivedIn, "Schaumburg"]
                },
              },
            };
          });
        }}
      >
        Add City
      </button>
    </div>
  );
};

export default DataManipulationEx;
