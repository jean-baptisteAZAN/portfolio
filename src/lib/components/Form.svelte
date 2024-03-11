<script src="https://web3forms.com/client/script.js" async defer></script>

<div id="Contact" class="flex flex-col items-center justify-center mt-10 p-20 bg-surface-500 w-[50rem] rounded-lg absolute left-0 right-0 mx-auto">
	<p class="font-monserrat text-3xl font-semibold">
		Lets get in touch !
	</p>
	<form action="https://api.web3forms.com/submit" method="POST" class="flex flex-col items-center justify-center gap-5 mt-10">
		<input type="hidden" name="access_key" value="585da6a9-b112-4dda-a93f-acc6846cfb65">
		<label class="label">
			<input class="input w-[30rem]" type="text" placeholder="Name" name="name" required />
		</label>
		<label class="label">
			<input class="input w-[30rem]" type="email" placeholder="Email" name="email" required />
		</label>
		<label class="label">
			<input class="input w-[30rem]" name="message" type="text" placeholder="Your message" required />
		</label>
		<div class="h-captcha" data-captcha="true"></div>
		<button type="submit" class="btn variant-filled">Send</button>
	</form>
</div>
