import { Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "@/app/components/SearchBar";

const MyPlan: React.FC = () => {
  const [plan, setPlan] = useState<string>("");
  
  function Search() {
    console.log(plan);
  }

  return (
    <View>
      <SearchBar
        value={plan}
        onChangeValue={setPlan}
        onSearch={Search}
        placeholder="Tatil Ara"
        iconName="search"
      />
    </View>
  );
};

export default MyPlan;
