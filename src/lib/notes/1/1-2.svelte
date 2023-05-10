<p>
	This study topic was part of the CPACC too, but as we are going deep into
	WCAG, it's good to make sure the basics are fresh in mind.
</p>
<p>
	Individuals and organisations using WCAG have different needs, so to meet
	those several layers of guidance are available.
</p>

<h3><span class="highlight">4</span> principles</h3>

<p>These are the foundation of web accessibility:</p>

<ul>
	<li>
		<strong>Perceivable</strong>: Information and user interface components must
		be presentable to users in ways persons with disabilities can perceive
		(including blindness, low vision, deafness and hearing loss, limited
		movement, and cognitive limitations).
	</li>
	<li>
		<strong>Operable</strong>: User interface components and navigation must be
		operable (functionality from keyboard).
	</li>
	<li>
		<strong>Understandable</strong>: Information and the operation of user
		interface must be understandable.
	</li>
	<li>
		<strong>Robust</strong>: Content must be robust enough that it can be
		interpreted reliably by a wide variety of user agents, including assistive
		technologies.
	</li>
</ul>

<h3><span class="highlight">13</span> guidelines</h3>

<p>
	Each principle contains one or more guidelines. The guidelines are not
	testable, but provide the framework and overall objectives to help authors
	understand the success criteria and better implement the techniques.
</p>
<p>
	In this list those marked with an asterisk (*) are the ones that are least
	intuitive for me.
</p>

<ul>
	<li>Perceivable</li>
	<ul>
		<li>Text alternatives</li>
		<li>Time-based media</li>
		<li>Adaptable *</li>
		<li>Distinguishable</li>
	</ul>
	<li>Operable</li>
	<ul>
		<li>Keyboard accessible</li>
		<li>Enough time</li>
		<li>Seizures and physical reactions *</li>
		<li>Navigable</li>
		<li>Input modalities *</li>
	</ul>
	<li>Understandable</li>
	<ul>
		<li>Readable</li>
		<li>Predictable</li>
		<li>Input assistance *</li>
	</ul>
	<li>Robust</li>
	<ul>
		<li>Compatible</li>
	</ul>
</ul>

<h3>Success Criteria</h3>

<p>
	WCAG provides testable success criteria for each guideline. Each success
	criterion is assigned a level A, AA or AAA. If a site meets the A level
	criteria, it is said to conform to level A. A site that meets levels A and AA
	conformst to AA and a site that meets all criteria conforms to level AAA.
</p>
<p>Most laws and policies that refer to WGAC 2.1 or 2.0 focus on level AA.</p>

<h3>Sufficient and Advisory Techniques</h3>

<p>
	The W3C has published techniques for meeting WCAG success criteria. The
	techniques are non-normative and can be one of three kinds:
</p>

<ul>
	<li>
		<strong>Sufficient techniques</strong>: if the web content meets sufficient
		techniques, it meets the success criterion.
	</li>
	<li>
		<strong>Failure techniques</strong>: if the web content fails any of these,
		it fails the success criterion.
	</li>
	<li>
		<strong>Advisory techniques</strong>: optional or conditional techniques may
		present best practices or possible ways to meet the success criterion.
	</li>
</ul>

<h3>Is that all?</h3>

<p>
	Note that even if web content conforms to level AAA, it will not be accessible
	to individuals with all types, degrees, or combinations of disability,
	particularly in the cognitive language and learning areas.
</p>
<p>
	<a href="https://www.w3.org/WAI/WCAG21/Understanding/understanding-metadata"
		>Metadata</a
	> may assist users in finding content most suitable for their needs. In conjunction
	with WCAG, metadata can play a number of roles including:
</p>

<ul>
	<li>
		Metadata can be used to associate conforming alternate versions of Web pages
		with Web pages which do not conform, in order to allow users to find the
		conforming alternate version when they land on a non-conforming page that
		they cannot use.
	</li>

	<li>
		Metadata can be used to locate and also to describe alternate pages where
		there are multiple versions of a page which have been developed, especially
		where the alternate pages are optimized for individuals with different
		disabilities. The user can use the metadata both to locate the alternate
		versions and to identify characteristics of the versions, so that they can
		find the one that best meets their needs.
	</li>

	<li>
		In addition to being used for whole pages (as in #1 and #2 above), metadata
		can be used to describe alternate versions of subcomponents of a page.
		Again, the metadata can be used to find alternate versions of a Web page
		component as well as to get descriptions of the alternate versions ( if
		there are several) in order to determine which one would best meet the
		user's needs.
	</li>
</ul>

<h3>Links</h3>

<ul>
	<li>
		<a href="https://www.w3.org/TR/WCAG21/#wcag-2-layers-of-guidance"
			>WCAG 2 Layers of Guidance</a
		>
	</li>
</ul>

<style lang="scss">
	ul {
		margin: 8px 8px 32px;
		padding-left: 24px;

		ul {
			margin: 8px;
		}

		li:nth-child(1) {
			padding-top: 8px;
		}
	}
</style>
