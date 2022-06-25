<script>
  let words = [
    {
      id: 1,
      kr: '것',
      en: 'A thing or an object'
    },
    {
      id: 2,
      kr: '하다',
      en: 'To do'
    },
    {
      id: 3,
      kr: '있다',
      en: 'To be'
    },
    {
      id: 4,
      kr: '수',
      en: 'Way, method, number'
    },
    {
      id: 5,
      kr: '나',
      en: 'Je'
    },
  ]
</script>

<h1>
  Word list
</h1>

<table>
  {#each words as word}
    <tr>
      <td>
        {word.id}
      </td>
      <td>
        {word.kr}
      </td>
      <td>
        {word.en}
      </td>
    </tr>
  {/each}
</table>

<style>
  table {
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
  }

  table, td {
    border: 1px solid;
  }

  td {
    padding: 10px;
    text-align: left;
  }
</style>
