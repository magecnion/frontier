(function() {var type_impls = {
"frontier_template_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-GenesisConfig%3CT,+I%3E\" class=\"impl\"><a href=\"#impl-Default-for-GenesisConfig%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for GenesisConfig&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    T: Config&lt;I&gt;,\n    I: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; GenesisConfig&lt;T, I&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","frontier_template_runtime::BalancesConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-GenesisConfig%3CT,+I%3E\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-GenesisConfig%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, T, I&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for GenesisConfig&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    T: Config&lt;I&gt;,\n    I: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;GenesisConfig&lt;T, I&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</span></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.195/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","frontier_template_runtime::BalancesConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BuildStorage-for-GenesisConfig%3CT,+I%3E\" class=\"impl\"><a href=\"#impl-BuildStorage-for-GenesisConfig%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; BuildStorage for GenesisConfig&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    T: Config&lt;I&gt;,\n    I: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.assimilate_storage\" class=\"method trait-impl\"><a href=\"#method.assimilate_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">assimilate_storage</a>(&amp;self, storage: &amp;mut Storage) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Assimilate the storage for this module into pre-existing overlays.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.build_storage\" class=\"method trait-impl\"><a href=\"#method.build_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">build_storage</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Storage, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Build the storage out of this builder.</div></details></div></details>","BuildStorage","frontier_template_runtime::BalancesConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-GenesisConfig%3CT,+I%3E\" class=\"impl\"><a href=\"#impl-Serialize-for-GenesisConfig%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for GenesisConfig&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    T: Config&lt;I&gt;,\n    I: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.195/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","frontier_template_runtime::BalancesConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BuildGenesisConfig-for-GenesisConfig%3CT,+I%3E\" class=\"impl\"><a href=\"#impl-BuildGenesisConfig-for-GenesisConfig%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; BuildGenesisConfig for GenesisConfig&lt;T, I&gt;<span class=\"where fmt-newline\">where\n    T: Config&lt;I&gt;,\n    I: 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.build\" class=\"method trait-impl\"><a href=\"#method.build\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">build</a>(&amp;self)</h4></section></summary><div class='docblock'>The build function puts initial <code>GenesisConfig</code> keys/values pairs into the storage.</div></details></div></details>","BuildGenesisConfig","frontier_template_runtime::BalancesConfig"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()