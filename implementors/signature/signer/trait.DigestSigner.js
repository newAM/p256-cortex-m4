(function() {var implementors = {};
implementors["ecdsa"] = [{"text":"impl&lt;C, D&gt; DigestSigner&lt;D, Signature&lt;C&gt;&gt; for SigningKey&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Curve + ProjectiveArithmetic,<br>&nbsp;&nbsp;&nbsp;&nbsp;FieldBytes&lt;C&gt;: From&lt;Scalar&lt;C&gt;&gt; + for&lt;'r&gt; From&lt;&amp;'r Scalar&lt;C&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Scalar&lt;C&gt;: PrimeField&lt;Repr = FieldBytes&lt;C&gt;&gt; + FromDigest&lt;C&gt; + Invert&lt;Output = Scalar&lt;C&gt;&gt; + SignPrimitive&lt;C&gt; + Zeroize,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: FixedOutput&lt;OutputSize = C::FieldSize&gt; + BlockInput + Clone + Default + Reset + Update,<br>&nbsp;&nbsp;&nbsp;&nbsp;SignatureSize&lt;C&gt;: ArrayLength&lt;u8&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()