(function() {var type_impls = {
"precompile_utils":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BoundedBytesString%3CK,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#80-88\">source</a><a href=\"#impl-BoundedBytesString%3CK,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, S: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"struct\" href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html\" title=\"struct precompile_utils::solidity::codec::bytes::BoundedBytesString\">BoundedBytesString</a>&lt;K, S&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.as_bytes\" class=\"method\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#81-83\">source</a><h4 class=\"code-header\">pub fn <a href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html#tymethod.as_bytes\" class=\"fn\">as_bytes</a>(&amp;self) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section><section id=\"method.as_str\" class=\"method\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#85-87\">source</a><h4 class=\"code-header\">pub fn <a href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html#tymethod.as_str\" class=\"fn\">as_str</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/str/error/struct.Utf8Error.html\" title=\"struct core::str::error::Utf8Error\">Utf8Error</a>&gt;</h4></section></div></details>",0,"precompile_utils::solidity::codec::bytes::UnboundedBytes","precompile_utils::solidity::codec::bytes::BoundedBytes","precompile_utils::solidity::codec::bytes::UnboundedString","precompile_utils::solidity::codec::bytes::BoundedString"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Codec-for-BoundedBytesString%3CK,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#90-152\">source</a><a href=\"#impl-Codec-for-BoundedBytesString%3CK,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: Kind, S: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"precompile_utils/solidity/codec/trait.Codec.html\" title=\"trait precompile_utils::solidity::codec::Codec\">Codec</a> for <a class=\"struct\" href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html\" title=\"struct precompile_utils::solidity::codec::bytes::BoundedBytesString\">BoundedBytesString</a>&lt;K, S&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.read\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#91-119\">source</a><a href=\"#method.read\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"precompile_utils/solidity/codec/trait.Codec.html#tymethod.read\" class=\"fn\">read</a>(reader: &amp;mut <a class=\"struct\" href=\"precompile_utils/solidity/codec/struct.Reader.html\" title=\"struct precompile_utils::solidity::codec::Reader\">Reader</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"precompile_utils/solidity/revert/type.MayRevert.html\" title=\"type precompile_utils::solidity::revert::MayRevert\">MayRevert</a>&lt;Self&gt;</h4></section><section id=\"method.write\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#121-143\">source</a><a href=\"#method.write\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"precompile_utils/solidity/codec/trait.Codec.html#tymethod.write\" class=\"fn\">write</a>(writer: &amp;mut <a class=\"struct\" href=\"precompile_utils/solidity/codec/struct.Writer.html\" title=\"struct precompile_utils::solidity::codec::Writer\">Writer</a>, value: Self)</h4></section><section id=\"method.has_static_size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#145-147\">source</a><a href=\"#method.has_static_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"precompile_utils/solidity/codec/trait.Codec.html#tymethod.has_static_size\" class=\"fn\">has_static_size</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.signature\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#149-151\">source</a><a href=\"#method.signature\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"precompile_utils/solidity/codec/trait.Codec.html#tymethod.signature\" class=\"fn\">signature</a>() -&gt; <a class=\"struct\" href=\"precompile_utils/prelude/struct.String.html\" title=\"struct precompile_utils::prelude::String\">String</a></h4></section><section id=\"method.is_explicit_tuple\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/mod.rs.html#47-49\">source</a><a href=\"#method.is_explicit_tuple\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"precompile_utils/solidity/codec/trait.Codec.html#method.is_explicit_tuple\" class=\"fn\">is_explicit_tuple</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></div></details>","Codec","precompile_utils::solidity::codec::bytes::UnboundedBytes","precompile_utils::solidity::codec::bytes::BoundedBytes","precompile_utils::solidity::codec::bytes::UnboundedString","precompile_utils::solidity::codec::bytes::BoundedString"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-BoundedBytesString%3CK,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#63-70\">source</a><a href=\"#impl-Clone-for-BoundedBytesString%3CK,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: Kind, S: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html\" title=\"struct precompile_utils::solidity::codec::bytes::BoundedBytesString\">BoundedBytesString</a>&lt;K, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#64-69\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","precompile_utils::solidity::codec::bytes::UnboundedBytes","precompile_utils::solidity::codec::bytes::BoundedBytes","precompile_utils::solidity::codec::bytes::UnboundedString","precompile_utils::solidity::codec::bytes::BoundedString"],["<section id=\"impl-Eq-for-BoundedBytesString%3CK,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#78\">source</a><a href=\"#impl-Eq-for-BoundedBytesString%3CK,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html\" title=\"struct precompile_utils::solidity::codec::bytes::BoundedBytesString\">BoundedBytesString</a>&lt;K, S&gt;</h3></section>","Eq","precompile_utils::solidity::codec::bytes::UnboundedBytes","precompile_utils::solidity::codec::bytes::BoundedBytes","precompile_utils::solidity::codec::bytes::UnboundedString","precompile_utils::solidity::codec::bytes::BoundedString"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CString%3E-for-BoundedBytesString%3CK,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#217-224\">source</a><a href=\"#impl-From%3CString%3E-for-BoundedBytesString%3CK,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"precompile_utils/prelude/struct.String.html\" title=\"struct precompile_utils::prelude::String\">String</a>&gt; for <a class=\"struct\" href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html\" title=\"struct precompile_utils::solidity::codec::bytes::BoundedBytesString\">BoundedBytesString</a>&lt;K, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#218-223\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: <a class=\"struct\" href=\"precompile_utils/prelude/struct.String.html\" title=\"struct precompile_utils::prelude::String\">String</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<String>","precompile_utils::solidity::codec::bytes::UnboundedBytes","precompile_utils::solidity::codec::bytes::BoundedBytes","precompile_utils::solidity::codec::bytes::UnboundedString","precompile_utils::solidity::codec::bytes::BoundedString"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-BoundedBytesString%3CK,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#57\">source</a><a href=\"#impl-Debug-for-BoundedBytesString%3CK,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html\" title=\"struct precompile_utils::solidity::codec::bytes::BoundedBytesString\">BoundedBytesString</a>&lt;K, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#57\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","precompile_utils::solidity::codec::bytes::UnboundedBytes","precompile_utils::solidity::codec::bytes::BoundedBytes","precompile_utils::solidity::codec::bytes::UnboundedString","precompile_utils::solidity::codec::bytes::BoundedString"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26str%3E-for-BoundedBytesString%3CK,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#208-215\">source</a><a href=\"#impl-From%3C%26str%3E-for-BoundedBytesString%3CK,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html\" title=\"struct precompile_utils::solidity::codec::bytes::BoundedBytesString\">BoundedBytesString</a>&lt;K, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#209-214\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<&str>","precompile_utils::solidity::codec::bytes::UnboundedBytes","precompile_utils::solidity::codec::bytes::BoundedBytes","precompile_utils::solidity::codec::bytes::UnboundedString","precompile_utils::solidity::codec::bytes::BoundedString"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq%3CBoundedBytesString%3CK2,+S2%3E%3E-for-BoundedBytesString%3CK1,+S1%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#72-76\">source</a><a href=\"#impl-PartialEq%3CBoundedBytesString%3CK2,+S2%3E%3E-for-BoundedBytesString%3CK1,+S1%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K1, S1, K2, S2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html\" title=\"struct precompile_utils::solidity::codec::bytes::BoundedBytesString\">BoundedBytesString</a>&lt;K2, S2&gt;&gt; for <a class=\"struct\" href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html\" title=\"struct precompile_utils::solidity::codec::bytes::BoundedBytesString\">BoundedBytesString</a>&lt;K1, S1&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#73-75\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html\" title=\"struct precompile_utils::solidity::codec::bytes::BoundedBytesString\">BoundedBytesString</a>&lt;K2, S2&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq<BoundedBytesString<K2, S2>>","precompile_utils::solidity::codec::bytes::UnboundedBytes","precompile_utils::solidity::codec::bytes::BoundedBytes","precompile_utils::solidity::codec::bytes::UnboundedString","precompile_utils::solidity::codec::bytes::BoundedString"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVec%3Cu8%3E%3E-for-BoundedBytesString%3CK,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#162-169\">source</a><a href=\"#impl-From%3CVec%3Cu8%3E%3E-for-BoundedBytesString%3CK,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt; for <a class=\"struct\" href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html\" title=\"struct precompile_utils::solidity::codec::bytes::BoundedBytesString\">BoundedBytesString</a>&lt;K, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#163-168\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vec<u8>>","precompile_utils::solidity::codec::bytes::UnboundedBytes","precompile_utils::solidity::codec::bytes::BoundedBytes","precompile_utils::solidity::codec::bytes::UnboundedString","precompile_utils::solidity::codec::bytes::BoundedString"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26%5Bu8%5D%3E-for-BoundedBytesString%3CK,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#171-178\">source</a><a href=\"#impl-From%3C%26%5Bu8%5D%3E-for-BoundedBytesString%3CK,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html\" title=\"struct precompile_utils::solidity::codec::bytes::BoundedBytesString\">BoundedBytesString</a>&lt;K, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#172-177\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<&[u8]>","precompile_utils::solidity::codec::bytes::UnboundedBytes","precompile_utils::solidity::codec::bytes::BoundedBytes","precompile_utils::solidity::codec::bytes::UnboundedString","precompile_utils::solidity::codec::bytes::BoundedString"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%5Bu8;+N%5D%3E-for-BoundedBytesString%3CK,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#180-187\">source</a><a href=\"#impl-From%3C%5Bu8;+N%5D%3E-for-BoundedBytesString%3CK,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, S, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">N</a>]&gt; for <a class=\"struct\" href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html\" title=\"struct precompile_utils::solidity::codec::bytes::BoundedBytesString\">BoundedBytesString</a>&lt;K, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#181-186\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">N</a>]) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<[u8; N]>","precompile_utils::solidity::codec::bytes::UnboundedBytes","precompile_utils::solidity::codec::bytes::BoundedBytes","precompile_utils::solidity::codec::bytes::UnboundedString","precompile_utils::solidity::codec::bytes::BoundedString"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26%5Bu8;+N%5D%3E-for-BoundedBytesString%3CK,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#189-196\">source</a><a href=\"#impl-From%3C%26%5Bu8;+N%5D%3E-for-BoundedBytesString%3CK,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, S, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">N</a>]&gt; for <a class=\"struct\" href=\"precompile_utils/solidity/codec/bytes/struct.BoundedBytesString.html\" title=\"struct precompile_utils::solidity::codec::bytes::BoundedBytesString\">BoundedBytesString</a>&lt;K, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/precompile_utils/solidity/codec/bytes.rs.html#190-195\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">N</a>]) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<&[u8; N]>","precompile_utils::solidity::codec::bytes::UnboundedBytes","precompile_utils::solidity::codec::bytes::BoundedBytes","precompile_utils::solidity::codec::bytes::UnboundedString","precompile_utils::solidity::codec::bytes::BoundedString"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()