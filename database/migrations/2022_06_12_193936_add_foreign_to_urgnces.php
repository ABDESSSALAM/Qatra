<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignToUrgnces extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('urgences', function (Blueprint $table) {
            //
            $table->unsignedBigInteger('codeD')->nullable();
            $table->foreign('codeD')->references('CodeD')->on('demandes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('urgnces', function (Blueprint $table) {
            //
        });
    }
}
